import { motion, useScroll, useSpring, useTransform } from "motion/react"

const ParallaxBackground = () => {
    const {scrollYProgress} = useScroll();
    const x = useSpring( scrollYProgress,{ damping:50 });
    const montain3Y = useTransform(x, [0,0.5], ["0%", "70%"]);
    const planetsX = useTransform(x, [0,0.5], ["0%", "-20%"]);
    const montain2Y = useTransform(x, [0,0.5], ["0%", "30%"]);
    const montain1Y = useTransform(x, [0,0.5], ["0%", "0%"]);
  return (
    <section className="absolute inset-0 bg-black/40">
        <div className="relative h-screen overflow-y-hidden">
            {/* BG Sky */}
            <div 
            className="absolute inset-0 w-full h-screen -z-50" 
            style={{
                backgroundImage: "url(/assets/sky.jpg)",
                backgroundPosition: "bottom",
                backgroundSize: "cover",
            }}/>
            {/* Montain Layer 3 */}
            <motion.div 
            className="absolute inset-0 -z-40"
            style={{
                backgroundImage: "url(/assets/mountain-3.png",
                backgroundPosition: "bottom",
                backgroundSize: "cover",
                y: montain3Y,
            }}/>
            {/* Planets */}
            <motion.div 
            className="absolute inset-0 -z-30"
            style={{
                backgroundImage: "url(/assets/planets.png)",
                backgroundPosition: "bottom",
                backgroundSize: "cover",
                x:planetsX,
            }}/>
            {/* Montain Layer 2 */}
            <motion.div 
            className="absolute inset-0 -z-20"
            style={{
                backgroundImage: "url(/assets/mountain-2.png)",
                backgroundPosition: "bottom",
                backgroundSize: "cover",
                y:montain2Y,
            }}/>
            {/* Montain Layer 1 */}
            <motion.div 
            className="absolute inset-0 -z-10"
            style={{
                backgroundImage: "url(/assets/mountain-1.png)",
                backgroundPosition: "bottom",
                backgroundSize: "cover",
                y:montain1Y,
            }}/>
        </div>
    </section>
  )
}

export default ParallaxBackground