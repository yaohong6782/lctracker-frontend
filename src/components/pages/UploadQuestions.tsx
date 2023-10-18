import React from "react";

import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { UploadSchema } from "@/zodSchema/upload";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const UploadQuestions = () => {
  const form = useForm<z.infer<typeof UploadSchema>>({
    resolver: zodResolver(UploadSchema),
    defaultValues: {
      questionNumber: "",
      title: "",
      url: "",
      content: "",
    },
  });

  // place holder
  const onSubmit = (values: z.infer<typeof UploadSchema>) => {
    console.log(values);
  };
  return (
    <>
      <br />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 grid justify-center"
        >
          <h2 className="text-2xl underline flex justify-center">
            Post Question
          </h2>
          <FormField
            control={form.control}
            name="questionNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Question Number
                </FormLabel>
                <FormControl className="lg:w-96 flex items-center justify-content-center md:w-72">
                  <Input type="text" placeholder="Question Number" {...field} />
                </FormControl>
                <FormDescription>E.g 1803</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />{" "}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title </FormLabel>
                <FormControl className="lg:w-96 flex items-center justify-content-center md:w-72">
                  <Input
                    type="text"
                    placeholder="Title of problem"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Problem Link </FormLabel>
                <FormControl className="lg:w-96 flex items-center justify-content-center md:w-72">
                  <Input type="text" placeholder="Link" {...field} />
                </FormControl>
                <FormDescription className="lg:w-96 flex items-center justify-content-center md:w-72">
                  E.g <br />
                  https://leetcode.com/problems/unique-binary-search-trees/description/
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Solution / Intuition</FormLabel>
                <FormControl className="lg:w-96 flex items-center justify-content-center md:w-72">
                  <Textarea
                    placeholder="Solution / Intuition to Problem"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button>Post</Button>
        </form>
      </Form>
    </>
  );
};

export default UploadQuestions;
