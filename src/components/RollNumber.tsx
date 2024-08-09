import { useSpring, animated } from "react-spring"

export type RollNumberProps = {
    value: number,
    delay: number,
}

export const RollNumber = (props: RollNumberProps) => {
    const { number } = useSpring({
        from: { number: 0 },
        number: props.value,
        delay: props.delay,
        config: { mass: 1, tension: 20, friction: 10 },
    });

    return (
        <animated.span>{number.to(n => n.toFixed(0))}</animated.span>
    )
}