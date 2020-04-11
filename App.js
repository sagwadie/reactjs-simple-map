import React, { Component } from 'react';
import ReactDependentScript from 'react-dependent-script';
import Map from './Map';

const data = [{
  locationCoords: {
    lat: -26.105924,
    lng: 28.067366
  },
  name: "Sagwadi Maswanganyi",
  locationName: "SANDTON CITY",
},
{
  locationCoords: {
    lat: -26.089465,
    lng: 28.050554
  },
  name: "Brian Maluleke",
  locationName: "BENMORE GARDERNS",
},
{
  locationCoords: {
    lat: -26.075188413,
    lng: 28.051594
  },
  name: "Rhandzu Maluleke",
  locationName: "DUXBERRY",
},
{
  locationCoords: {
    lat: -26.0334644,
    lng: 28.06553
  },
  name: "Tom Khoza",
  locationName: "SUNNIGHILL",
},
{
  locationCoords: {
    lat: -26.2334644,
    lng: 28.06553
  },
  name: "Amos Nkuna",
  locationName: "CITY DEEP",
},
{
  locationCoords: {
    lat: -26.144334644,
    lng: 28.06553
  },
  name: "Sibusiso Zuma",
  locationName: "MELROSE",
},
{
  locationCoords: {
    lat: -26.17334644,
    lng: 28.16553
  },
  name: "Lucas Ngwane",
  locationName: "BEDFORDVIEW",
},
{
  locationCoords: {
    lat: -26.16934644,
    lng: 28.06553
  },
  name: "Simon Ngubane",
  locationName: "HOUGHTON",
},
{
  locationCoords: {
    lat: -26.01,
    lng: 28.0190544
  },
  name: "Sibusiso Meyiwa",
  locationName: "LONEHILL",
},
{
  locationCoords: {
    lat: -26.076149,
    lng: 27.980766
  },
  name:"Jabulani Zulu",
  locationName: "STRYDOM PARK",
}
];

class App extends Component {

  state = {
    selectedItem: null
  }

  showInfo(e, selectedItem) {
    this.setState({ "selectedItem": selectedItem });
  }


  render() {
    return (
      <div>
       
        <ReactDependentScript scripts={['https://maps.googleapis.com/maps/api/js?key=AIzaSyCNLJEnc7_1yZB-2KKMxgLQcwiJqTS7U_k']}>
          <Map center={{ lat: -26.07000, lng: 27.98000 }} zoom={25} data={data} selectedItem={this.state.selectedItem} />
        </ReactDependentScript>
      </div>
    );
  }
}

export default App;
