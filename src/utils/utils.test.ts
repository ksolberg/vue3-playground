import { describe, it, expect } from "vitest";
import { camelize } from "./utils";

describe("camelize", () => {
  it("Should return 'equipmentClassName' if parameter is ='EquipmentClass name'", () => {
    expect(camelize("EquipmentClass name")).toBe("equipmentClassName");
  });
  it("Should return 'equipmentClassName' if parameter is ='Equipment className'", () => {
    expect(camelize("Equipment className")).toBe("equipmentClassName");
  });
  it("Should return 'equipmentClassName' if parameter is ='equipment class name'", () => {
    expect(camelize("equipment class name")).toBe("equipmentClassName");
  });
  it("Should return 'equipmentClassName' if parameter is ='Equipment Class Name'", () => {
    expect(camelize("Equipment Class Name")).toBe("equipmentClassName");
  });
});
