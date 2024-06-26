import Link from "next/link";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// MUI ICON COMPONENTS
import Add from "@mui/icons-material/Add";
import VisibilityOutlined from "@mui/icons-material/VisibilityOutlined";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
// CUSTOM COMPONENT
import { Paragraph } from "components/typography";
// STYLED COMPONENT
import { StyledRoot } from "./styles";
// CUSTOM UTILS METHOD
import { format } from "utils/currency";

// ==============================================================
interface Props {
  id: string;
  name: string;
  price: number;
  image: string;
}
// ==============================================================

export default function ProductCard({ id, image, name, price }: Props) {
  return (
    <StyledRoot>
      <div className="img-wrapper">
        <img alt="product" width="100%" src={image} />

        <div className="hover-actions">
          <IconButton className="view" LinkComponent={Link} href={`/products/${id}`}>
            <VisibilityOutlined />
          </IconButton>

          <IconButton className="cart">
            <ShoppingCartOutlined />
          </IconButton>
        </div>
      </div>

      <div className="content-root">
        <div>
          <Link href={`/products/${id}`}>
            <Paragraph color="text.primary" fontSize={16} fontWeight={500}>
              {name}
            </Paragraph>
          </Link>

          <Paragraph fontWeight={500} mt={1}>
            {format(price, "$0,0.00")}
          </Paragraph>
        </div>

        <Button variant="outlined" color="secondary">
          <Add />
        </Button>
      </div>
    </StyledRoot>
  );
}
