// import React from 'react';
// import GoogleMap from 'google-map-react'
//
// const mapStateToProps = (state) => ({
//     coordinate: state.mapsDate.coordinate,
//     fetchingCoordinate: state.mapsDate.fetchingCoordinate
// })
//
//
// function createMapOptions (maps) {
//
//     return {
//         panControl: true,
//         mapTypeControl: true,
//         scrollwheel: false,
//         zoomControlOptions: {
//             position: maps.ControlPosition.RIGHT_CENTER,
//             style: maps.ZoomControlStyle.LARGE
//         },
//         mapTypeControlOptions: {
//             position: maps.ControlPosition.TOP_RIGHT
//         }
//     }
// }
//
// const mapDispatchToProps = (props)=>({
//
// })
//
// class Map extends React.Component {
//     render() {
//         return (
//
//             <GoogleMap
//                 bootstrapURLKeys={{key: 'AIzaSyCIGFuueBb3ewt-Ewe7ySfhE9ZdHVjdPsc'}}
//                 center={[54.408636, 18.588977]}
//                 zoom={13}
//                 options={createMapOptions}> 
//             </GoogleMap>
//         );
//     }
// }
//
// export default Map;