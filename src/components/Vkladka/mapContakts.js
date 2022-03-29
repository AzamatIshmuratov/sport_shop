import { YMaps, Map, Placemark, Clusterer } from "react-yandex-maps";
// import './App.css';


//  npm install --legacy-peer-deps react-yandex-maps

const mapData = {
//   center: [55.751574, 37.573856],
  center: [54.739619, 55.957377],
  zoom: 16,
};

const coordinates = [
  [54.739619, 55.957377],
//   [43.585472, 39.723098],
//   [55.159902, 61.402554],
//   [59.938955, 30.315644],
//   [55.753220, 37.622513],
//   [57.626559, 39.893813], 
//   [56.326797, 44.006516],
//   [55.796127, 49.106414],
//   [51.768205, 55.096964],
//   [56.838011, 60.597474],
//   [61.003184, 69.018911],
//   [55.030204, 82.920430],
];

const options = {
  // Опции.
  // Необходимо указать данный тип макета.
  iconLayout: 'default#image',
  // Своё изображение иконки метки.
  iconImageHref: './map-pin.png',
  // Размеры метки.
  iconImageSize: [30, 41],
  iconImageOffset: [-15, -41]

};


function MapContakts() {
  return (
    <div className="map">
      <YMaps>
        <Map
          defaultState={mapData}
          width={'100%'}
          height={500}
        >
          <Clusterer
            options={{
              preset: 'islands#invertedVioletClusterIcons',
            }}
          >
            {coordinates.map((coordinate, idx) =>
              <Placemark
                key={idx}
                geometry={coordinate}
                modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                options={options}
              />
            )}
          </Clusterer>

        </Map>
      </YMaps>

    </div>

  );
}

export default MapContakts;