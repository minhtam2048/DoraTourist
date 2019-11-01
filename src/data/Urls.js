import { DataTypes } from "./Types";

const protocol = "http";
const hostname = "localhost";
const port = 3000;

export const RestUrls = {
    [DataTypes.LOCATIONS]: `${protocol}://${hostname}:${port}/locations`,
    [DataTypes.AREAS]: `${protocol}://${hostname}:${port}/areas`,
    [DataTypes.USERS]: `${protocol}://${hostname}:${port}/users`
}