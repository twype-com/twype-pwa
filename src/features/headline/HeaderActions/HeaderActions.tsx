"use client";
import { FC } from "react";
import cn from "classnames";
import { Flex, Avatar, Tooltip, IconButton, Button } from "@radix-ui/themes";
import {
  Envelope,
  MagnifyingGlass,
  PaperPlaneTilt,
  Plus,
} from "@phosphor-icons/react";
import { SupBadge } from "@/components/SupBadge/SupBadge";
import styles from "./HeaderActions.module.scss";

type HeaderActionsProps = {
  className?: string;
};

export const HeaderActions: FC<HeaderActionsProps> = ({ className }) => {
  return (
    <Flex gap="2" align="center">
      <div className={styles.search}>
        <Tooltip content="Messages">
          <IconButton size="3" radius="full" className={styles.button}>
            <MagnifyingGlass />
          </IconButton>
        </Tooltip>
      </div>

      <Button variant="outline" color="gray" className={styles.upload}>
        <Plus weight="bold" /> <span className={styles.uploadText}>Upload</span>
      </Button>

      <Tooltip content="Messages">
        <IconButton size="3" radius="full" className={styles.button}>
          <PaperPlaneTilt />
        </IconButton>
      </Tooltip>

      <Tooltip content="Inbox">
        <IconButton size="3" radius="full" className={styles.button}>
          <Envelope />
          <SupBadge text="3" className={styles.badge} />
        </IconButton>
      </Tooltip>

      <Avatar
        size="3"
        src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
        fallback="AT"
        radius="full"
      />
    </Flex>
  );
};
