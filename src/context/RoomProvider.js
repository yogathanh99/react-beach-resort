import React, { Component } from 'react';

import items from '../data';

const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featureRooms: [],
    loading: true,
    type: 'all',
    capacity: 0,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };

  formatData(items) {
    const itemsData = items.map(item => {
      const id = item.sys.id;
      const images = item.fields.images.map(image => image.fields.file.url);

      const room = { ...item.fields, images, id };

      return room;
    });
    return itemsData;
  }

  componentDidMount() {
    let rooms = this.formatData(items);
    let featureRooms = rooms.filter(room => room.featured === true);
    let maxPrice = Math.max(...rooms.map(room => room.price));
    let maxSize = Math.max(...rooms.map(room => room.size));

    this.setState({
      rooms,
      featureRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize,
    });
  }

  getRoom = slug => {
    const rooms = [...this.state.rooms];
    const room = rooms.find(room => room.slug === slug);

    return room;
  };

  handleChange = e => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState(
      {
        [name]: value,
      },
      this.filterRoom,
    );
  };

  filterRoom = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets,
    } = this.state;

    let tempRooms = [...rooms];
    //filter type
    if (type !== 'all') {
      tempRooms = tempRooms.filter(room => room.type === type);
    }
    //filter capacity
    capacity = parseInt(capacity);
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity);
    }
    //filter price
    price = parseInt(price);
    tempRooms = tempRooms.filter(room => room.price <= price);
    //filter size
    tempRooms = tempRooms.filter(
      room => room.size >= minSize && room.size <= maxSize,
    );
    //filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true);
    }
    //filter by pets
    if (pets) {
      tempRooms = tempRooms.filter(room => room.pets === true);
    }

    this.setState({
      sortedRooms: tempRooms,
    });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

function withRoom(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}

export { RoomContext, RoomProvider, RoomConsumer, withRoom };
