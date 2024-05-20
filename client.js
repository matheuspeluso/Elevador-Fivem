setTick(()=>{
    let ped = PlayerPedId();
    let [x,y,z] = GetEntityCoords(ped,true);

    let coordsEntrada = elevador.coordsEntrada;
    let coordsSaida = elevador.coordsSaida;

    let distancia1 = GetDistanceBetweenCoords(x,y,z,coordsEntrada.x,coordsEntrada.y,coordsEntrada.z);
    let distancia2 = GetDistanceBetweenCoords(x,y,z,coordsSaida.x,coordsSaida.y,coordsSaida.z);

    if (distancia1 < 10 || distancia2 < 10){
        DrawMarker(elevador.marker,coordsEntrada.x,coordsEntrada.y,coordsEntrada.z,0,0,0,0,0,0,1,1,1,255,255,255,200,true,false,0,true)
        DrawMarker(elevador.marker,coordsSaida.x,coordsSaida.y,coordsSaida.z,0,0,0,0,0,0,1,1,1,255,255,255,200,true,false,0,true)

        let player = PlayerId();

        if (distancia1 <1 && IsControlJustPressed(0,38)){
            StartPlayerTeleport(player,coordsSaida.x,coordsSaida.y,coordsSaida.z,0,0,0,0)   
        }else if (distancia2 <1 && IsControlJustPressed(0,38)){
            StartPlayerTeleport(player,coordsEntrada.x,coordsEntrada.y,coordsEntrada.z,0,0,0,0)
        }
    }
})

