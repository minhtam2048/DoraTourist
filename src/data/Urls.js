import { DataTypes } from "./Types";

const protocol = "http";
const hostname = "localhost";
const port = 6969;

export const RestUrls = {
    [DataTypes.LOCATIONS]: `${protocol}://${hostname}:${port}/api/locations`,
    [DataTypes.AREAS]: `${protocol}://${hostname}:${port}/api/areas`
}