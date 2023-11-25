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

import * as AXIOS_API from "@/constants/apiConstants";
import axios from "axios";

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
  const onSubmit = async (values: z.infer<typeof UploadSchema>) => {
    console.log(values);
    try {
      const res = await axios.post(
        `${AXIOS_API.BASE_URL}${AXIOS_API.API_ENDPOINTS.CREATE_POST}`,
        {
          questionTitle: values.title,
          questionNumber: values.questionNumber,
          content: values.content,
          questionUrl: values.url,
          userId: localStorage.getItem('userLoginName') 
        }, {
            headers : {
                Authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
        }
      );

      if (res.status === 200 || res.status === 201) {
        console.log(res);
        console.log("successfully posted")
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="flex justify-center items-center pt-6">
        <h1 className="text-3xl font-bold ">{"Post Questions"} </h1>
      </div>
      <br />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 grid justify-center"
        >
          {/* <h2 className="text-2xl underline flex justify-center">
            Post Question
          </h2> */}
          <FormField
            control={form.control}
            name="questionNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Question Number</FormLabel>
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
