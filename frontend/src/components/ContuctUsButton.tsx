import { FC } from "react";

import { Button } from "antd";

interface ContuctUsButtonProps {}

const ContuctUsButton: FC<ContuctUsButtonProps> = () => {
  return (
    <div>
      <Button color="default" variant="solid">
        Contuct us
      </Button>
    </div>
  );
};

export default ContuctUsButton;
