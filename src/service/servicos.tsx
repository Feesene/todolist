import axios, { Method } from "axios";
import { InterfaceService } from "../interfaces/InterfaceService";

export async function requestsService(
  method: Method,
  servico?: InterfaceService,
  db?: "compras" | "lugares" | "metas" | "tarefas",
  select?: (value: any) => void,
  id?: number | string
) {
  try {
    const resposta = await axios({
      method: method,
      url: `http://192.168.15.37:3001/${db}/${id}`,
      data: servico !== undefined ? servico : null,
    });
    const resp = await axios.get(`http://192.168.15.37:3001/${db}/`);
    if (resposta.status === 201) {
      if (select) {
        select(resp.data);
      }
    }
    return resposta.data;
  } catch (error) {
    console.log(error);
  }
}

