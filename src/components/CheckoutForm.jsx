import { useQueryClient } from "@tanstack/react-query";
import { Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { clearCart } from "../features/cart/cartSlice";
import { customFetch, formatPrice } from "../utils/";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);
    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;
    const queryClient = useQueryClient();

    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
      cartItems,
      numItemsInCart,
    };

    try {
      await customFetch.post(
        "/orders",
        { data: info },
        { headers: { Authorization: `Bearer ${user.token}` } },
      );
      queryClient.removeQueries(["queries"]);
      store.dispatch(clearCart());
      toast.success("Order placed successfully");
      return redirect("/orders");
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        "There was an error placing your order";
      toast.error(errorMessage);

      if (error?.response?.status === 401 || error?.response?.status === 403) {
        return redirect("/login");
      }

      return null;
    }
  };

const CheckoutForm = () => {
  return (
    <Form method="POST" className="flex flex-col gap-y-4">
      <h4 className="text-xl font-medium capitalize">Shipping information</h4>
      <FormInput label="first name" name="name" type="text" />
      <FormInput label="address" name="address" type="text" />
      <div className="mt-4">
        <SubmitBtn text="Place your order" />
      </div>
    </Form>
  );
};

export default CheckoutForm;
