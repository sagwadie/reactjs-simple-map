/*global google*/
import React, { Component } from 'react';
export default class Map extends Component {

    constructor(props) {
        super(props)
        this.markers = [];
        this.infoWindow = null;
    }

    componentDidUpdate() {
        if (this.props.selectedItem) {
            let selectedMarker = this.markers.find(m => {
                return m.id === this.props.selectedItem.locationId;
            });
            this.showInfoWindow(selectedMarker);
        }
    }

    componentDidMount() {
        this.initMap();
    }

    initMap() {
        let options = {
            zoom: this.props.zoom,
            center: this.props.center,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        let map = new window.google.maps.Map(document.getElementById("map"), options);
        this.infoWindow = new window.google.maps.InfoWindow({});
        let bounds = new window.google.maps.LatLngBounds();
        this.props.data.forEach(item => {

            const marker = new window.google.maps.Marker({
                map: map,
                id: item.locationId,
                position: item.locationCoords,
                title: item.locationName,
                name: item.name,
            });
            marker.addListener("click", () => {
                this.showInfoWindow(marker);
            });
            bounds.extend(marker.getPosition());
            this.markers.push(marker);
        });
        map.fitBounds(bounds);
    }


    showInfoWindow(marker) {
        this.infoWindow.setContent(marker.name);
        this.infoWindow.open(marker.map, marker);
    }

    render() {
        return (
            <div id="map" />
        );
    }
}