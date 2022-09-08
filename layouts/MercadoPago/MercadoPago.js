import { useMercadopago } from "react-sdk-mercadopago";
import { useEffect, useState } from "react";

export default function App() {
    const mercadopago = useMercadopago.v2(
        "TEST-ed629f1b-0131-4fc6-9175-98a4aa96d8e1",
        {
            locale: "es-PE"
        }
    );
    const [rendered, setRendered] = useState(false);

    useEffect(() => {
        if (mercadopago && !rendered) {
            mercadopago.checkout({
                preference: {
                    id: '1194303385-22672642-e826-4847-bc6c-42d1dada82cd'
                },
                render: {
                    container: ".cho-container",
                    label: "Pagar"
                }
            });
            setRendered(true);
        }
    }, [mercadopago, rendered]);

    return (
        <div>
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
            <div className="cho-container" />
        </div>
    );
}
