"use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@repo/ui/src/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/src/components/ui/form";
import { Input } from "@repo/ui/src/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/src/components/ui/select";
import { useState } from "react";

// import { getProduct } from "@/actions/getProduct";
// import { trpc } from "@/trpc/client";
// import { useToast } from "../ui/use-toast";

const formSchema = z.object({
  code: z.string().optional(),
  code_interne: z.string().optional(),
  libelle: z.string(),
  pvttc: z.string(),
  pvht: z.string().optional(),
  tva_code: z.string(),
  rayon_code: z.string(),
  famille_code: z.string(),
});

function ProductForm() {
  // const { data, isLoading } = trpc.listProductsSettings.useQuery();
  // const { mutate: updateProduct } = trpc.updateProduct.useMutation({
  //   onSuccess: (data) => {
  //     toast({
  //       title: "Product updated",
  //       description: data.libelle,
  //       variant: "default",
  //       duration: 5000,
  //     });
  //   },
  // });
  // const [productId, setProductId] = useState<number | undefined>();

  // const [codeBar, setCodeBar] = useState("");
  // const { toast } = useToast();
  // const handleCodeSubmite = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const newProduct = await getProduct(codeBar);
  //   if (newProduct.success) {
  //     setProductId(newProduct.product?.id);
  //     form.setValue("code", newProduct.product?.code!);
  //     form.setValue("code_interne", newProduct.product?.code_interne!);
  //     form.setValue("libelle", newProduct.product?.libelle!);
  //     form.setValue("pvttc", newProduct.product?.pvttc!.toString());
  //     form.setValue("pvht", newProduct.product?.pvht!.toString());
  //     form.setValue("tva_code", newProduct.product?.tva_code!.toString());
  //     form.setValue("rayon_code", newProduct.product?.rayon_code!.toString());
  //     form.setValue(
  //       "famille_code",
  //       newProduct.product?.famille_code!.toString(),
  //     );
  //     console.log(newProduct);
  //   } else {
  //     toast({
  //       title: "Product not found",
  //       description: "Product not found",
  //       variant: "destructive",
  //       duration: 5000,
  //     });
  //   }
  // };

  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  // });

  // function onSubmit(values: z.infer<typeof formSchema>) {
  //   let tva_taux = data?.tva.find((tva) => tva.code === +values.tva_code)
  //     ?.taux!;
  //   let newValues = {
  //     id: productId!,
  //     libelle: values.libelle,
  //     pvttc: +values.pvttc,
  //     pvht: +(+values.pvttc / (1 + tva_taux / 100)).toFixed(2),
  //     tva_code: +values.tva_code,
  //     rayon_code: +values.rayon_code,
  //     famille_code: +values.famille_code,
  //   };
  //   updateProduct(newValues);
  //   form.reset();
  //   setProductId(undefined);
  //   setCodeBar("");
  // }

  return (
    <>
      {/* <form onSubmit={handleCodeSubmite}>
        <Input
          placeholder="Enter a product codeBar"
          className="bg-muted border-2 border-gray-300"
          value={codeBar}
          onChange={(e) => setCodeBar(e.target.value)}
        />
      </form>
      {productId && (
        <Form {...form}>
          <h1 className="text-4xl font-bold text-center my-3 ">Edit Product</h1>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-7 max-w-[70%] mx-auto bg-muted border-2 border-gray-300 rounded-md py-4 px-7"
          >
            <div className="flex gap-2 justify-between">
              <FormField
                disabled
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem className="fontbold text-xl">
                    <FormLabel>Code</FormLabel>
                    <FormControl>
                      <Input disabled placeholder="" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                disabled
                control={form.control}
                name="code_interne"
                render={({ field }) => (
                  <FormItem className="fontbold text-xl">
                    <FormLabel>code_intern</FormLabel>
                    <FormControl>
                      <Input disabled placeholder="" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="libelle"
              render={({ field }) => (
                <FormItem className="fontbold text-xl">
                  <FormLabel>libelle</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-2 justify-between ">
              <FormField
                control={form.control}
                name="pvttc"
                render={({ field }) => (
                  <FormItem className="fontbold text-xl">
                    <FormLabel>pvttc</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                disabled
                control={form.control}
                name="pvht"
                render={({ field }) => (
                  <FormItem className="fontbold text-xl">
                    <FormLabel>pvht</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        value={(
                          +form.getValues().pvttc /
                          (1 +
                            data?.tva.find(
                              (v) => v.code === +form.getValues().tva_code,
                            )?.taux! /
                              100)
                        ).toFixed(2)}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-2 justify-between">
              <FormField
                control={form.control}
                name="tva_code"
                render={({ field }) => (
                  <FormItem className="fontbold text-xl w-full">
                    <FormLabel>tva</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {data?.tva?.map((tva) => (
                          <SelectItem
                            key={tva.code}
                            value={tva.code.toString()}
                            onSelect={() => {
                              form.setValue("tva_code", tva.code.toString());
                            }}
                          >
                            {tva.code}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rayon_code"
                render={({ field }) => (
                  <FormItem className="fontbold text-xl w-full">
                    <FormLabel>rayon</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={field.value} />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent>
                        {data?.rayons?.map((rayon) => (
                          <SelectItem
                            key={rayon.code}
                            value={rayon.code.toString()}
                          >
                            {rayon.code}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="famille_code"
                render={({ field }) => (
                  <FormItem className="fontbold text-xl w-full">
                    <FormLabel>famille</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {data?.familles?.map((famille) => (
                          <SelectItem
                            key={famille.code}
                            value={famille.code.toString()}
                          >
                            {famille.code}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit">Edit</Button>
          </form>
        </Form>
      )} */}
    </>
  );
}

export default ProductForm;
