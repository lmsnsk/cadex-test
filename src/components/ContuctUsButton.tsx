import { FC } from "react";
import { Link } from "react-router-dom";

import { Button } from "antd";

const ContuctUsButton: FC = () => {
  return (
    <div>
      <Link to="/contacts">
        <Button color="default" variant="solid">
          Contact us
        </Button>
      </Link>
    </div>
  );
};

export default ContuctUsButton;
