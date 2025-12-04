import { useEffect, useState } from "react";

export default function Customers() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {

        async function loadCustomers() {
            try {
                const response = await fetch("https://localhost:7032/api/Customers/GetCustomersDto");

                if (!response.ok) throw new Error("Failed to load customers");

                const data = await response.json();
                setCustomers(data);
            } catch (err) {
                console.error(err);
            }
        }

        loadCustomers();

    }, []);

    return (
        <div>
            <h1>Customers</h1>
            <ul>
                {customers.map((c) => (
                    <li key={c.customerId}>
                        {c.title} {c.firstName}
                    </li>
                ))}
            </ul>
        </div>
    );
}