import classNames from 'classnames';
import RcTabs, {
  TabsProps as RcTabsProps,
  TabPane,
  TabPaneProps,
} from 'rc-tabs';
import { EditableConfig } from 'rc-tabs/lib/interface';
import React from 'react';

export type TabsType = 'line' | 'card' | 'editable-card';
export type TabsPosition = 'top' | 'right' | 'bottom' | 'left';

export type { TabPaneProps };
export type SizeType = 'small' | 'middle' | 'large' | undefined;
const TabDefaultPrefix = 'rc-tabs';

export interface TabsProps extends Omit<RcTabsProps, 'editable'> {
  type?: TabsType;
  size?: SizeType;
  hideAdd?: boolean;
  centered?: boolean;
  addIcon?: React.ReactNode;
  onEdit?: (
    e: React.MouseEvent | React.KeyboardEvent | string,
    action: 'add' | 'remove',
  ) => void;
}

const Tabs: React.FC<TabsProps> & { TabPane: typeof TabPane } = ({
  type,
  className,
  size: propSize,
  onEdit,
  hideAdd,
  centered,
  ...props
}: TabsProps) => {
  const {
    prefixCls: customizePrefixCls,
    // , moreIcon = <EllipsisOutlined />
  } = props;

  const prefixCls = customizePrefixCls || TabDefaultPrefix;

  let editable: EditableConfig | undefined;
  if (type === 'editable-card') {
    editable = {
      onEdit: (editType, { key, event }) => {
        onEdit?.(editType === 'add' ? event : key!, editType);
      },
      showAdd: hideAdd !== true,
    };
  }

  return (
    <RcTabs
      moreTransitionName={`${prefixCls}-slide-up`}
      {...props}
      className={classNames(
        {
          [`${prefixCls}-${propSize}`]: propSize,
          [`${prefixCls}-card`]: ['card', 'editable-card'].includes(
            type as string,
          ),
          [`${prefixCls}-editable-card`]: type === 'editable-card',
          [`${prefixCls}-centered`]: centered,
        },
        className,
      )}
      editable={editable}
      prefixCls={prefixCls}
    />
  );
};

Tabs.TabPane = TabPane;

export default Tabs;
