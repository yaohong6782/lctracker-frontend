import React, { useEffect, useState } from "react";

import * as z from "zod";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import axios from "axios";
import * as AXIOS_API from "@/constants/apiConstants";

import { LoginSchema } from "@/zodSchema/registration";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  useEffect(() => {
    localStorage.clear();
  }, []);

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  // eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJodW1waHJleUBlbWFpb…A1Nn0.rV6v1d_TEzUnRF3cAwK_h_NeHPADgHNpN3uc1p1q6TE
  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    console.log(values);
    try {
      const res = await axios.post(
        `${AXIOS_API.BASE_URL}${AXIOS_API.API_ENDPOINTS.LOGIN}`,
        {
          username: values.email,
          password: values.password,
        }
      );

      if (res.status === 200) {
        console.log(res.data);
        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("userLoginName" , values.email);
        navigate("/home");
      }
    } catch (err) {
      console.log(err);
    }
  };

  //   console.log(localStorage.getItem('accessToken'))
  return (
    <div className="flex h-screen">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 grid justify-center m-auto"
        >
          <h1 className="text-3xl font-bold underline">Login</h1>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Email" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Password"
                    autoComplete="on"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Login</Button>
          <FormDescription>
            Don&apos;t have an account?{" "}
            <Link to="/registration">
              <span className="font-bold underline">Sign Up</span>
            </Link>
          </FormDescription>
        </form>
      </Form>
    </div>
  );
};

export default Login;
