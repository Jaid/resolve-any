import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require
const {default: resolveAny, resolveSync} = indexModule

const asyncValue = async () => {
  return 1
}

it("should run sync", () => {
  expect(resolveSync(1)).toStrictEqual(1)
  expect(resolveSync(() => 1)).toStrictEqual(1)
})

it("should run async", async () => {
  expect(await resolveAny(1)).toStrictEqual(1)
  expect(await resolveAny(() => 1)).toStrictEqual(1)
  expect(await resolveAny(asyncValue)).toStrictEqual(1)
  expect(await resolveAny(asyncValue())).toStrictEqual(1)
  expect(await resolveAny(() => asyncValue())).toStrictEqual(1)
})