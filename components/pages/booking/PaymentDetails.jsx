import { useRouter } from "next/router"
import Container from "../../../utils/container"
import Button from "../../UI/Button"

const PaymentDetails = () => {
  const router = useRouter();
  return (
    <Container>
      PaymentDetails
      <div className="flex items-center justify-center gap-x-6 py-4">
            <Button type={"button"} onClick={() => router.back()}>
              Previuos
            </Button>
            <Button type={"submit"}>Payment</Button>
          </div>
    </Container>
  )
}

export default PaymentDetails