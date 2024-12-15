"use client";
import React, { useState } from "react";

import AlertModal from "../widgets/AlertModal";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { customers } from "@/lib/customers.json";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectGroup } from "@radix-ui/react-select";
//import LoadingButton from "../widgets/LoadingButton";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name is required",
  }),
  amount: z.string().min(2, {
    message: "Amount is required",
  }),
  status: z.string().min(2, {
    message: "Status is required",
  }),
});

const CreateInvoice = () => {
  const [open, setOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      amount: "",
      status: "Unpaid" || "Paid",
    },
  });

  const isLoading = form.formState.isSubmitting;

  function onSubmit(values) {
    const { name, amount, status } = values;
    console.log(values);
  }
  return (
    <div>
      <AlertModal
        title={"Create Invoice"}
        description={"Create the Invoices here"}
        trigger={<Button>Create Invoice +</Button>}
        btntext={"Create Invoice"}
        open={open}
        setOpen={setOpen}
      >
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-3"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a Customer" />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Customers</SelectLabel>
                          {customers.map((customer) => (
                            <SelectItem
                              key={customer.id}
                              value={customer.email}
                            >
                              {customer.name}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        type="number"
                        placeholder="Amount"
                        className="border w-full border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a Status" />
                          </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Status</SelectLabel>
                            <SelectItem value="Unpaid">Unpaid</SelectItem>
                            <SelectItem value="Paid">Paid</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* 
              {isLoading ? (
                <LoadingButton
                  btnText="Submit"
                  btnClass="w-[200px] h-[50px] bg-slate-600 text-white rounded-md flex justify-center items-center"
                />
              ) : (
              )} */}
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </AlertModal>
    </div>
  );
};

export default CreateInvoice;
