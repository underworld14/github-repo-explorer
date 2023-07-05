import { act, renderHook } from "@testing-library/react";
import { useDebounce } from "../use-debounce";
import { beforeEach } from "vitest";

describe("useDebounce", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("should return the initial value", () => {
    const { result } = renderHook(() => useDebounce("hello", 500));
    expect(result.current).toBe("hello");
  });

  test("should return the initial value if delay is 0", () => {
    const { result } = renderHook(() => useDebounce("hello", 0));
    expect(result.current).toBe("hello");
  });

  test("should debounced value updated after delay time", () => {
    const { result, rerender } = renderHook(({ value, delay }) => useDebounce(value, delay), {
      initialProps: {
        value: "hello",
        delay: 500,
      },
    });
    expect(result.current).toBe("hello");

    rerender({ value: "world", delay: 500 });
    expect(result.current).toBe("hello");

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current).toBe("world");
  });
});
