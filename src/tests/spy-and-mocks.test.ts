import { describe, expect, it, vi, spyOn } from "vitest";

const player = {
  name: "Playername",
  posX: 0,
  posY: 0,
  move: function (x: number, y: number) {
    this.posX = x;
    this.posY = y;
  },
};

describe("Move player", () => {
  it("Should move player", () => {
    const spy = spyOn(player, "move");
    player.move(1, 2);
    player.move(2, 3);
    expect(spy).toHaveBeenCalledTimes(2);
  });
});

describe("Player movement with mock", () => {
  it("Should move player", () => {
    const mock = vi.fn().mockImplementation((x: number, y: number) => {
      return { x, y };
    });

    player.move = mock;

    expect(player.move(8, 6)).toEqual({ x: 8, y: 6 });
    expect(mock).toHaveBeenCalledTimes(1);
  });
});
