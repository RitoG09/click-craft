"use client";

// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { ArrowRight, Upload, Wand2, ThumbsUp, Youtube } from "lucide-react";
// import Image from "next/image";
// import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
// import Link from "next/link";

// const creatorImages: { [key: string]: string } = {
//   CarryMinati: "/photo-CarryMinati.jpg",
//   MrBeast: "/photo-Mr.Beast.jpeg",
//   R2H: "/photo-R2H.jpeg",
// };

// export default function Home() {
//   return (
//     <main className="min-h-screen">
//       {/* Hero Section */}
//       <div className="relative bg-gradient-to-b from-primary/95 to-primary/70">
//         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&q=80')] mix-blend-overlay opacity-10"></div>
//         <div className="container mx-auto px-4 py-24 md:py-32 relative">
//           <div className="flex flex-col items-center text-center space-y-8">
//             <div className="flex items-center gap-3 text-white">
//               <Youtube className="h-16 w-16" />
//               <h1 className="text-5xl md:text-7xl font-bold">ThumbCompare</h1>
//             </div>
//             <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
//               Create high-performing YouTube thumbnails by comparing and testing
//               different designs with real audience feedback.
//             </p>
//             <div className="flex gap-4 mt-8">
//               <Link href="/login">
//                 <InteractiveHoverButton>Get Started</InteractiveHoverButton>
//               </Link>

//               <Button
//                 size="lg"
//                 variant="ghost"
//                 className="text-lg text-black border-white hover:bg-white/10 rounded-full"
//               >
//                 Learn More
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="container mx-auto px-4 py-24 relative">
//         <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
//         <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-primary">
//           Why Choose ThumbCompare?
//         </h2>
//         <div className="grid md:grid-cols-3 gap-8 relative">
//           <Card className="p-8 flex flex-col items-center text-center space-y-6 hover:shadow-xl transition-shadow duration-300 border-t-2 border-primary">
//             <div className="p-4 rounded-full bg-primary/10">
//               <Upload className="h-12 w-12 text-primary" />
//             </div>
//             <h3 className="text-2xl font-semibold">Easy Upload</h3>
//             <p className="text-muted-foreground text-lg">
//               Upload multiple thumbnail variations in seconds and start testing
//               immediately.
//             </p>
//           </Card>
//           <Card className="p-8 flex flex-col items-center text-center space-y-6 hover:shadow-xl transition-shadow duration-300 border-t-2 border-primary">
//             <div className="p-4 rounded-full bg-primary/10">
//               <Wand2 className="h-12 w-12 text-primary" />
//             </div>
//             <h3 className="text-2xl font-semibold">AI-Powered Insights</h3>
//             <p className="text-muted-foreground text-lg">
//               Get detailed analytics and AI-driven recommendations for your
//               thumbnails.
//             </p>
//           </Card>
//           <Card className="p-8 flex flex-col items-center text-center space-y-6 hover:shadow-xl transition-shadow duration-300 border-t-2 border-primary">
//             <div className="p-4 rounded-full bg-primary/10">
//               <ThumbsUp className="h-12 w-12 text-primary" />
//             </div>
//             <h3 className="text-2xl font-semibold">Real Feedback</h3>
//             <p className="text-muted-foreground text-lg">
//               Receive genuine feedback from your target audience before
//               publishing.
//             </p>
//           </Card>
//         </div>
//       </div>

//       {/* Social Proof Section */}
//       <div className="bg-gradient-to-b from-primary/5 to-transparent py-24">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-primary">
//             Trusted by Content Creators
//           </h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {["CarryMinati", "MrBeast", "R2H"].map((i) => (
//               <Card
//                 key={i}
//                 className="p-8 hover:shadow-xl transition-shadow duration-300"
//               >
//                 {" "}
//                 <div className="flex flex-col space-y-6">
//                   <div className="flex items-center space-x-4">
//                     <Image
//                       src={creatorImages[i]}
//                       alt={i}
//                       width={64} // Set a fixed width
//                       height={64} // Set a fixed height
//                       className="rounded-full object-cover ring-2 ring-primary/20"
//                     />
//                     <div>
//                       <h4 className="font-semibold text-xl">{i}</h4>
//                       <p className="text-primary">100M+ Subscribers</p>
//                     </div>
//                   </div>
//                   <p className="text-muted-foreground text-lg italic">
//                     "ThumbCompare helped me increase my click-through rate by
//                     40%. The insights are invaluable!"
//                   </p>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="bg-primary text-white">
//         <div className="container mx-auto px-4 py-24 text-center">
//           <div className="max-w-3xl mx-auto">
//             <h2 className="text-4xl md:text-6xl font-bold mb-8">
//               Ready to Create Better Thumbnails?
//             </h2>
//             <p className="text-xl text-white/90 mb-12">
//               Join thousands of content creators who are optimizing their
//               YouTube success with ThumbCompare.
//             </p>
//             <Button
//               size="lg"
//               className="text-lg bg-white text-primary hover:bg-white/90 cursor-pointer"
//             >
//               Start Free Trial
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="border-t bg-background">
//         <div className="container mx-auto px-4 py-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="flex items-center gap-2">
//               <Youtube className="h-8 w-8 text-primary" />
//               <div className="flex justify-between gap-8 items-center">
//                 <span className="font-semibold text-xl">ThumbCompare</span>
//               </div>
//             </div>
//             <div className="flex gap-8 mt-4 md:mt-0">
//               <p>
//                 Made with ❤️ by{" "}
//                 <Link href="https://github.com/RitoG09">
//                   <strong className="bg-gradient-to-r from-indigo-500 to-indigo-800 bg-clip-text text-transparent">
//                     RitoG09
//                   </strong>
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </main>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ThumbsUp, Eye, BarChart, Youtube } from "lucide-react";
import LogoIcon from "@/components/own/LogoIcon";
import Link from "next/link";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import Image from "next/image";
import { Cover } from "@/components/ui/cover";

const Index = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const features = [
    {
      icon: <ThumbsUp className="h-6 w-6" />,
      title: "A/B Testing",
      description: "Compare multiple thumbnails to see which performs better",
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Audience Feedback",
      description: "Get instant feedback from your target audience",
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Performance Analytics",
      description: "Track which thumbnails drive more engagement and clicks",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center space-x-2">
            <LogoIcon className="h-8 w-8" />
            <Link href="/">
              <span className="font-bold text-xl">
                Thumb<strong className="text-indigo-600">Compare</strong>
              </span>
            </Link>
          </div>
          <div className="space-x-4">
            <Link href="/login">
              <Button
                variant="default"
                className="cursor-pointer rounded-lg p-5 bg-indigo-700 hover:bg-indigo-800"
              >
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button
                variant="outline"
                className="cursor-pointer rounded-lg p-5"
              >
                Sign Up
              </Button>
            </Link>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-16 items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Create Thumbnails That{" "}
              <Cover>
                <span className="text-indigo-600">Convert</span>
              </Cover>
            </h1>
            <p className="text-xl text-muted-foreground">
              Compare, test, and optimize your YouTube thumbnails to increase
              views and engagement.
            </p>
            <div className="flex space-x-4 pt-4">
              <Link href="/register">
                <InteractiveHoverButton className="group cursor-pointer">
                  Get Started
                  {/* <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /> */}
                </InteractiveHoverButton>
              </Link>
              <Button variant="outline" size="lg" className="rounded-full">
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative aspect-video rounded-xl overflow-hidden shadow-2xl"
          >
            import Image from "next/image"; import Image from "next/image";
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-indigo-800/5 backdrop-blur-sm flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 p-6 w-full relative">
                {/* Thumbnail A */}
                <div className="aspect-video bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden relative">
                  <Image
                    src="/thumb1.jpg"
                    alt="Thumbnail A"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                  <div className="absolute bottom-2 left-2 bg-indigo-700 text-white text-xs rounded px-2 py-1 w-fit">
                    Thumbnail A
                  </div>
                </div>

                {/* Dotted Curved Arrow */}
                <div className="absolute left-1/2 top-1/100 -translate-x-1/2 -translate-y-1/2">
                  <svg
                    width="200"
                    height="100"
                    viewBox="0 0 80 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5,40 Q40,5 75,40"
                      stroke="black"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      fill="transparent"
                    />
                    <polygon points="70,37 75,40 70,43" fill="white" />
                  </svg>
                </div>

                {/* Thumbnail B */}
                <div className="aspect-video bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden relative">
                  <Image
                    src="/thumb2.jpg"
                    alt="Thumbnail B"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                  <div className="absolute bottom-2 left-2 bg-indigo-200 text-indigo-900 text-xs rounded px-2 py-1 w-fit">
                    Thumbnail B
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="py-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12"
          >
            Features Designed for Content Creators
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center py-16"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-6">
              Ready to optimize your thumbnails?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of content creators who use ThumbCompare to
              increase their views and engagement.
            </p>
            <Link href="/signup">
              <Button size="lg">Start for Free</Button>
            </Link>
          </motion.div>
        </motion.div>
        {/* Footer */}
        <footer className="border-t bg-background">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex gap-8 mt-4 md:mt-0">
                <p>
                  Made with ❤️ by{" "}
                  <Link href="https://github.com/RitoG09">
                    <strong className="bg-gradient-to-r from-indigo-500 to-indigo-800 bg-clip-text text-transparent">
                      RitoG09
                    </strong>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
