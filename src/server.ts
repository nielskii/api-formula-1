import fastify from "fastify";
import cors from "@fastify/cors"

const server = fastify({logger: true});
const PORT = Number(process.env.PORT) || 3000


server.register(cors,{
    origin: "*", //Qualquer pessoa pode consumir minha api, caso não quisesse era so colocar dentro da aspa o ip especificado para consumir
    // methods: ["GET","POST"] --> aqui eu digo quais metodos sao aceitos na api
})

interface DriverParams {
    id:string
}
interface TeamsParams {
    id:string
}

const teams = [
  { id: 1, name: "McLaren", base: "Woking, United Kingdom" },
  { id: 2, name: "Mercedes", base: "Brackley, United Kingdom" },
  { id: 3, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
  { id: 4, name: "Ferrari", base: "Maranello, Italy" },
  { id: 5, name: "Aston Martin", base: "Silverstone, United Kingdom" },
  { id: 6, name: "Alpine", base: "Enstone, United Kingdom" },
  { id: 7, name: "Williams", base: "Grove, United Kingdom" },
  { id: 8, name: "Haas", base: "Kannapolis, United States" },
  { id: 9, name: "Kick Sauber", base: "Hinwil, Switzerland" },
  { id: 10, name: "RB (Racing Bulls)", base: "Faenza, Italy" },

  // times extras / desenvolvimento (mock)
  { id: 11, name: "Red Bull Junior Team", base: "Europe" },
  { id: 12, name: "Mercedes Junior Team", base: "Europe" },
  { id: 13, name: "McLaren Development Team", base: "United Kingdom" },
  { id: 14, name: "Andretti Global F1 Project", base: "United States" },
  { id: 15, name: "Porsche Motorsport F1 Project", base: "Germany" },
];

const drivers = [
  { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
  { id: 2, name: "Lewis Hamilton", team: "Ferrari" },
  { id: 3, name: "Lando Norris", team: "McLaren" },
  { id: 4, name: "Charles Leclerc", team: "Ferrari" },
  { id: 5, name: "Carlos Sainz", team: "Williams" },
  { id: 6, name: "George Russell", team: "Mercedes" },
  { id: 7, name: "Fernando Alonso", team: "Aston Martin" },
  { id: 8, name: "Lance Stroll", team: "Aston Martin" },
  { id: 9, name: "Pierre Gasly", team: "Alpine" },
  { id: 10, name: "Esteban Ocon", team: "Haas" },
  { id: 11, name: "Yuki Tsunoda", team: "RB (Racing Bulls)" },
  { id: 12, name: "Alex Albon", team: "Williams" },
  { id: 13, name: "Nico Hülkenberg", team: "Kick Sauber" },
  { id: 14, name: "Oscar Piastri", team: "McLaren" },
  { id: 15, name: "Zhou Guanyu", team: "Kick Sauber" },
];

server.get("/", async (request, response) =>{
    response.type("application/json").code(200)
    return {message: "DESAFIO DIO - API Formula 1 bb"}
})

server.get("/teams", async(request,response)=>{
    response.type("application/json").code(200)
    return {teams}
})

server.get<{Params:TeamsParams}>("/teams/:id", async(request,response)=>{
    const id = parseInt(request.params.id)
    const team = teams.find(t=>t.id === id)
    if(!team){
        response.type("application/json").code(404)
        return {message: "Team not found"}
    }
    else {
        response.type("application/json").code(200)
        return {team}
    }
})

server.get("/drivers", async(request,response)=>{
    response.type("application/json").code(200)
    return {drivers}
})

//Tipando a entrada, caso fosse a saida ficaria perto da seta da função
server.get<{Params: DriverParams}>("/drivers/:id", async(request,response)=>{
    const id = parseInt(request.params.id)
    const driver = drivers.find(d=>d.id === id);
    if(!driver){
        response.type("application/json").code(404)
        return {message: "Driver Not Found"}
    }
    else{
        response.type("application/json").code(200)
        return {driver}
    }
})
//Host é para acessar qualquer ip, sem isso ele so acessa se for local
server.listen({port:PORT, host: "0.0.0.0"},(err)=>{
    if(err) throw err
    console.log(`Server init`)
})