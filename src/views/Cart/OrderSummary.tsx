import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import Card from "../../components/ui/Card";
import FormikForm from "../../components/form/FormikForm";
import { useAppDispatch, useAppSelector } from "../../store/hook";

interface IOrderSummaryProps {
    data: number;
}

const OrderSummary: React.FC<IOrderSummaryProps> = ({ data }) => {
    const dispatch = useAppDispatch();
    const formatIndianRupee = (amount: number) => {
        const formatter = new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
        });
        return formatter.format(amount);
    };
const user = useAppSelector((state)=>state.auth.loginResponse)
console.log(user?.email)
    const fields = [
        { name: "firstName", label: "First Name", type: "text" },
        { name: "lastName", label: "Last Name", type: "text" },
        { name: "address", label: "Address", type: "text" },
        { name: "city", label: "City", type: "text" },
        { name: "postalCode", label: "Postal Code", type: "text" },
        { name: "email", label: "Email", type: "email" },
        { name: "phone", label: "Phone", type: "tel" },
      ];
      const initialValues = {
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        postalCode: "",
        email: "",
        phone: "",
      };

    const handleSubmit = async (values: Record<string, string>) => {
       alert('pass')
    };


    return (
        <div>
            <Card>

                <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
                <p className="mb-1">Subtotal: {formatIndianRupee(data)}</p>
                <p className="mb-1">Shipping: {formatIndianRupee(10)}</p>
                <p className="mb-1">Tax (5%): {formatIndianRupee(data * 0.05)}</p>
                <p className="mb-4 text-xl">
                    Total: {formatIndianRupee(data + 10 + data * 0.05)}
                </p>
                <p className="text-gray-500">
                    <FaRupeeSign /> Prices are in Indian Rupees.
                </p>

            </Card>
            <Card>
            <FormikForm fields={fields} onSubmit={handleSubmit} initialValues={initialValues}  />
            </Card>
        </div>
    );
};

export default OrderSummary;
