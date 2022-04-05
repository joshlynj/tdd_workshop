
import { returnStatus } from "./Drivers";

describe("return status", () => {
  it("returns too young status", () => {
    expect(returnStatus(15)).toBe("too young");
  });
  it("returns too old status", () => {
    expect(returnStatus(86)).toBe("too old");
  });
  it("returns eligble status", () => {
    expect(returnStatus(35)).toBe("eligible");
  });

});

