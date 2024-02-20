import { useIsMiniLayout } from '@myapp/shared/components';
import { SHARED_ROUTES as R } from '@myapp/shared/constants';
import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import { SidebarQuickAccessButton as QuickAccess } from './components/sidebar-quick-access-button';
import * as Styled from './styles';
import * as SX from './sx';
import type { SidebarQuickAccessProps as Props } from './types';

export const SidebarQuickAccess = memo(
  ({ className, showAcademicCenter, supportCall }: Props) => {
    const isMini = useIsMiniLayout();

    return (
      <Styled.Wrapper
        className={classnames('SidebarQuickAccess', className)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          gap: isMini ? 0 : 1,
        }}
      >
        {showAcademicCenter && (
          <QuickAccess
            to={R.academyCenter}
            icon="library-books"
            title="Academic center"
            endIcon="arrow-up-right"
            titleSx={SX.academicCenterTitle}
            key="academic-center"
          />
        )}
        <QuickAccess
          to={R.priceAndPlan}
          icon="flash"
          title="Upgrade Plan"
          titleMini="Upgrade"
          variant="contained"
          color="primary"
          miniProps={SX.upgradePlanMini}
          key="upgrade"
        />

        {supportCall && (
          <QuickAccess
            to={R.support}
            target="_blank"
            title="Book a Support Call"
            titleMini="Support"
            titleSx={SX.supportTitle}
            key="support"
          />
        )}
      </Styled.Wrapper>
    );
  }
);

SidebarQuickAccess.displayName = 'SidebarQuickAccess';
