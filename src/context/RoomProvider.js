import React, { Component } from 'react';

import items from '../data';

const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featureRooms: [],
    loading: true,
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
    const rooms = this.formatData(items);
    const featureRooms = rooms.filter(room => room.featured === true);

    this.setState({
      rooms,
      featureRooms,
      sortedRooms: rooms,
      loading: false,
    });
  }

  getRoom = slug => {
    const rooms = [...this.state.rooms];
    const room = rooms.find(room => room.slug === slug);

    return room;
  };

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomContext, RoomProvider, RoomConsumer };
