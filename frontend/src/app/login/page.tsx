"use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
// } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Separator } from "@/components/ui/separator";
// import toast from "react-hot-toast";
// import { Youtube, Lock, Mail, User } from "lucide-react";
// import Link from "next/link";

// export default function Login() {
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);

//     // Simulated authentication
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       toast("You have signed in succesfully", { duration: 4000 });
//     } catch (error) {
//       toast("Something went wrong. Please try again.", { duration: 4000 });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center p-4">
//       <Card className="w-full max-w-md">
//         <CardHeader className="space-y-3">
//           <div className="flex items-center justify-center space-x-2">
//             <Youtube className="h-8 w-8 text-red-500" />
//             <h2 className="text-2xl font-bold">Thumbnail Compare</h2>
//           </div>
//           <CardDescription className="text-center">
//             Compare and analyze YouTube thumbnails to optimize your content
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <Tabs defaultValue="signin" className="w-full">
//             <TabsList className="grid w-full grid-cols-2">
//               <TabsTrigger value="signin">Sign In</TabsTrigger>
//               {/* <TabsTrigger value="signup">Sign Up</TabsTrigger> */}
//             </TabsList>
//             <TabsContent value="signin">
//               <form onSubmit={handleSubmit} className="space-y-4 mt-4">
//                 <div className="space-y-3">
//                   <div className="space-y-2">
//                     <Label htmlFor="signin-email">Email</Label>
//                     <div className="relative">
//                       <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
//                       <Input
//                         id="signin-email"
//                         type="email"
//                         placeholder="name@example.com"
//                         className="pl-10"
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="signin-password">Password</Label>
//                     <div className="relative">
//                       <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
//                       <Input
//                         id="signin-password"
//                         type="password"
//                         placeholder="Enter your password"
//                         className="pl-10"
//                         required
//                       />
//                     </div>
//                     <div className="text-right font-bold">
//                       <Link href="/forget-password">Forget Paaword?</Link>
//                     </div>
//                   </div>
//                 </div>
//                 <Button type="submit" className="w-full" disabled={isLoading}>
//                   {isLoading ? "Signing in..." : "Sign In"}
//                 </Button>
//               </form>
//             </TabsContent>
//             {/* <TabsContent value="signup">
//               <form onSubmit={handleSubmit} className="space-y-4 mt-4">
//                 <div className="space-y-3">
//                   <div className="space-y-2">
//                     <Label htmlFor="signup-name">Full Name</Label>
//                     <div className="relative flex justify-end items-center">
//                       <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
//                       <Input
//                         id="signup-name"
//                         type="text"
//                         placeholder="John Doe"
//                         className="pl-10"
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="signup-email">Email</Label>
//                     <div className="relative">
//                       <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
//                       <Input
//                         id="signup-email"
//                         type="email"
//                         placeholder="name@example.com"
//                         className="pl-10"
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="signup-password">Password</Label>
//                     <div className="relative">
//                       <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
//                       <Input
//                         id="signup-password"
//                         type="password"
//                         placeholder="Create a password"
//                         className="pl-10"
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="signup-password">Confirm Password</Label>
//                     <div className="relative">
//                       <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
//                       <Input
//                         id="signup-password"
//                         type="password"
//                         placeholder="Confirm the password"
//                         className="pl-10"
//                         required
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <Button type="submit" className="w-full" disabled={isLoading}>
//                   {isLoading ? "Creating account..." : "Create Account"}
//                 </Button>
//               </form>
//             </TabsContent> */}
//           </Tabs>
//         </CardContent>
//         <CardFooter className="flex flex-col space-y-4">
//           <div className="relative">
//             <Separator className="my-4" />
//             <div className="absolute inset-0 flex items-center justify-center">
//               <span className="bg-background px-2 text-xs text-muted-foreground uppercase">
//                 Or
//               </span>
//             </div>
//           </div>
//           <div className="grid grid-cols-1 gap-2 w-full">
//             <Button variant="outline" className="w-full">
//               <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
//                 <path
//                   d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                   fill="#4285F4"
//                 />
//                 <path
//                   d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//                   fill="#34A853"
//                 />
//                 <path
//                   d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//                   fill="#FBBC05"
//                 />
//                 <path
//                   d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//                   fill="#EA4335"
//                 />
//               </svg>
//               Continue with Google
//             </Button>
//           </div>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// }

import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import AuthLayout from "@/components/own/authLayout";
import { redirect } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsLoading(true);

    // Simulate login request
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Login successful!");
      redirect("/");
    }, 1500);
  };

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.3 } },
    idle: { scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to access your account"
      alternateText="Don't have an account?"
      alternateLink="/register"
      alternateLinkText="Sign up"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            Email
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <motion.div
              whileFocus="focus"
              initial="idle"
              animate="idle"
              variants={inputVariants}
            >
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 h-12 form-input-transition"
                placeholder="you@example.com"
                required
              />
            </motion.div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password" className="text-sm font-medium">
              Password
            </Label>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-xs font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Forgot password?
            </motion.a>
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <motion.div
              whileFocus="focus"
              initial="idle"
              animate="idle"
              variants={inputVariants}
            >
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 h-12 form-input-transition"
                placeholder="••••••••"
                required
              />
            </motion.div>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full auth-button"
        >
          {isLoading ? (
            <span className="animate-pulse">Signing in...</span>
          ) : (
            "Sign in"
          )}
        </Button>
      </form>
    </AuthLayout>
  );
}
