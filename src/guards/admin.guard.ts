import { owner } from "../config";
import { ChatMember } from "telegraf/typings/core/types/typegram";
import { db } from "../database";
import { PermsI } from "../interfaces/controllers";

export async function get_access(emisor: ChatMember, receptor: ChatMember, operation: string[]): Promise<PermsI> {
    if (emisor.user.id == receptor.user.id) {
        return {
            status: false,
            message: `No te puedes ${operation[0]} ti mismo`
        }
    };
    if (emisor.status == 'member' && receptor.status == 'administrator') {
        return {
            status: false,
            message: `Un miembro no puede ${operation[0]} a un administrador`
        }
    };
    if (emisor.status == 'administrator' && receptor.status == 'administrator') {
        return {
            status: false,
            message: `Un administrador no puede ${operation[0]} a otro administrador`
        }
    };
    if (emisor.status == 'member' || emisor.status == 'administrator' && receptor.status == 'creator') {
        return {
            status: false,
            message: `Un administrador no puede ${operation[0]} al propietario`
        }
    };
    if (
        emisor.status == 'administrator' && receptor.status == 'member' ||
        emisor.status == 'creator' && receptor.status == 'member' ||
        emisor.user.id == owner.id
    ) {
        return {
            status: true,
            message: `${receptor.user.first_name} ha sido ${operation[1]} por ${emisor.user.first_name}`
        }
    }
    if (emisor.user.id) {
        const res = await db().get('sudos').value()
        let found: boolean;
        res.forEach(sudo => {
            if (emisor.user.id == sudo.id) {
                found = true
            }
        });
        return {
            status: true,
            message: `${receptor.user.first_name} ha sido ${operation[1]} por ${emisor.user.first_name}`
        }
    }
};