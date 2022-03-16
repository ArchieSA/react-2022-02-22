import { renderHook, act } from '@testing-library/react-hooks'
import useValue from "./use-value";


it('should increment counter', function () {
    const { result } = renderHook(() => useValue(0));

    act(() => {
        result.current.increment()
    })
    expect(result.current.amount).toBe(1)
});

it('should decrement counter', function () {
    const { result } = renderHook(() => useValue(5));

    act(() => {
        result.current.decrement()
    })
    expect(result.current.amount).toBe(4)
});

it('should be at >= 0', function () {
    const { result } = renderHook(() => useValue(0));

    act(() => {
        result.current.decrement()
    })
    expect(result.current.amount).toBe(0)
});

