import { IOMDbStore } from "./stores/Interfaces";
import TYPES from "./stores/Types";
import { Container } from "inversify";
import { OMDbStore } from "./stores/OMDbStore";

export const container = new Container();
container
    .bind<IOMDbStore>(TYPES.OMDbStore)
    .to(OMDbStore)
    .inSingletonScope();
