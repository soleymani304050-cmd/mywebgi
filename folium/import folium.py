import folium
from folium.plugins import HeatMap
my_map=folium.Map(location=[35.6892,51.3890], zoom_start=12)
wighted_data=[
    [35.6892,51.3890,0.9],
    [35.7000,51.3900,0.3],
    [35.7100,51.4000,0.6]
]
HeatMap(wighted_data,radius=20).add_to(my_map)
my_map.save("index.html")