import api from "../config/axios";

export async function GetHeroById(id) {
    return api.get(`id/${id}.json`)
}

export async function GetAll() {
    return api.get(`all.json`)
}