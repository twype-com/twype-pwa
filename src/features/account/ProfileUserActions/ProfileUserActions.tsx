import { FC } from "react";
import cn from "classnames";
import styles from "./ProfileUserActions.module.scss";
import { Button, DropdownMenu, IconButton } from "@radix-ui/themes";
import { ShareFat, DotsThreeOutlineVertical } from "@phosphor-icons/react";

type ProfileUserActionsProps = {
  className?: string;
};

export const ProfileUserActions: FC<ProfileUserActionsProps> = ({ className }) => {
  return (
    <div className={cn(styles.actions, className)}>
      <IconButton variant="ghost">
        <ShareFat size={24} color="black"/>
      </IconButton>

      {/* <IconButton variant="ghost">
        <DotsThreeOutlineVertical size={24} color="black"/>
      </IconButton> */}

      <DropdownMenu.Root >
        <DropdownMenu.Trigger>
          <Button variant="ghost">
            <DotsThreeOutlineVertical size={24} color="black" />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          {/* <DropdownMenu.Item shortcut="⌘ E">Send Message</DropdownMenu.Item> */}
          <DropdownMenu.Item>Send Message</DropdownMenu.Item>

          {/* <DropdownMenu.Separator /> */}

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
            <DropdownMenu.SubContent>
              <DropdownMenu.Item>Recommend</DropdownMenu.Item>
              <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>

          <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
            Report
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
};
