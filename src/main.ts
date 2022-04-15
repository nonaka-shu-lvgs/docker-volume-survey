import database from "./db";
import {generateUsers} from "./lib";

const client = (() => {
  switch (process.argv[2]) {
    case "bind":
      return database.bind
    case "mount":
      return database.mount
    default:
      console.error("invalid string. put bind or mount")
      process.exit(1)
  }
})()

const userCount = (() => {
  const c = Number(process.argv[3])
  if (Number.isSafeInteger(c)) {
    return c
  } else {
    console.error("invalid number or empty string. using default value 100000")

    return 100000
  }
})()

const users = generateUsers(userCount)

console.time()
client.user.createMany({
  data: users
}).then(() => {
  console.timeEnd()
}).finally(async () => {
  await Promise.allSettled([
    database.bind.$disconnect(),
    database.mount.$disconnect()
  ])
})