import {PrismaClient as BindDBClient} from "../prisma/generated/bind";
import {PrismaClient as MountDBClient} from "../prisma/generated/mount";

export default {
  bind: new BindDBClient(),
  mount: new MountDBClient()
}