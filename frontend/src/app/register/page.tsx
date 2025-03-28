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

// export default function Register() {
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
//               {/* <TabsTrigger value="signin">Sign In</TabsTrigger> */}
//               <TabsTrigger value="signup">Sign Up</TabsTrigger>
//             </TabsList>
//             {/* <TabsContent value="signin">
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
//             </TabsContent> */}
//             <TabsContent value="signup">
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
//             </TabsContent>
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

import AuthLayout from "@/components/own/authLayout";
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { registerAction } from "@/actions/authActions";
import { useActionState } from "react";
import { useTransition } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPending, startTransition] = useTransition();

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.3 } },
    idle: { scale: 1, transition: { duration: 0.3 } },
  };

  const initialState = {
    status: 0,
    message: "",
    errors: {},
  };

  const [state, formAction] = useActionState(registerAction, initialState);

  // Form validation client-side
  const clientValidation = (formData: FormData) => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (!name || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields");
      return false;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return false;
    }

    setIsLoading(true);
    return true;
  };

  return (
    <AuthLayout
      title="Create an account"
      subtitle="Sign up to get started"
      alternateText="Already have an account?"
      alternateLink="/login"
      alternateLinkText="Sign in"
    >
      <form
        className="space-y-4"
        action={formAction}
        onSubmit={(e) => {
          const form = e.currentTarget;
          const formData = new FormData(form);

          if (!clientValidation(formData)) {
            e.preventDefault(); // Prevent form submission if validation fails
            return;
          }

          // Show initial toast on form submission
          toast(
            "Email sent to your registered email, Please check your email.",
            { position: "top-right" }
          );
          setIsLoading(true);

          // The toast for success/error will be based on the state after form submission
          setTimeout(() => {
            if (state.status === 200 && !state.errors) {
              toast.success(
                "Email sent to your registered email, Please check your email.",
                {
                  position: "top-right",
                  duration: 5000,
                }
              );

              // Reset form on success
              setName("");
              setEmail("");
              setPassword("");
              setConfirmPassword("");
            } else if (state.errors && Object.keys(state.errors).length > 0) {
              toast.error(
                state.message || "Please correct the errors in the form"
              );
            }

            setIsLoading(false);
          }, 1000); // Give enough time for the action to complete and state to update
        }}
      >
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium">
            Name
          </Label>
          <div className="relative">
            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <motion.div
              whileFocus="focus"
              initial="idle"
              animate="idle"
              variants={inputVariants}
            >
              <Input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="pl-10 h-12 form-input-transition"
                placeholder="Your name"
                required
              />
              {state.errors?.name && (
                <span className="text-red-500">{state.errors.name}</span>
              )}
            </motion.div>
          </div>
        </div>

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
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 h-12 form-input-transition"
                placeholder="you@example.com"
                required
              />
              {state.errors?.email && (
                <span className="text-red-500">{state.errors.email}</span>
              )}
            </motion.div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-sm font-medium">
            Password
          </Label>
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
                name="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 h-12 form-input-transition"
                placeholder="••••••••"
                required
              />
              {state.errors?.password && (
                <span className="text-red-500">{state.errors.password}</span>
              )}
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

        <div className="space-y-2">
          <Label htmlFor="confirmPassword" className="text-sm font-medium">
            Confirm Password
          </Label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <motion.div
              whileFocus="focus"
              initial="idle"
              animate="idle"
              variants={inputVariants}
            >
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="pl-10 h-12 form-input-transition"
                placeholder="••••••••"
                required
              />
              {state.errors?.confirm_password && (
                <span className="text-red-500">
                  {state.errors.confirm_password}
                </span>
              )}
            </motion.div>
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              {showConfirmPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        <Button
          type="submit"
          disabled={isLoading || isPending}
          className="w-full auth-button mt-6 cursor-pointer"
        >
          {isLoading || isPending ? (
            <span className="animate-pulse">Creating account...</span>
          ) : (
            "Create account"
          )}
        </Button>

        {state.message && state.status === 200 && !state.errors && (
          <div className="success">{state.message}</div>
        )}
      </form>
    </AuthLayout>
  );
}
