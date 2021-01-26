import React from 'react'
import Button from '@material-ui/core/Button'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'

import { S, StatusButtonStyleProps } from './StatusButton.styles'
import { status } from './status'

export interface StatusButtonProps extends StatusButtonStyleProps {}

const StatusButton: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  const [currentStatus, setCurrentStatus] = React.useState<typeof status[number]>('no status')
  const anchorRef = React.useRef<HTMLButtonElement>(null)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return
    }

    setOpen(false)
  }

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    }
  }

  const prevOpen = React.useRef(open)
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus()
    }

    prevOpen.current = open
  }, [open])

  return (
    <S.StatusButton status={currentStatus}>
      <div>
        <Grid container spacing={1}>
          <Grid item>
            <Button
              className="button"
              ref={anchorRef}
              aria-controls={open ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              status here
            </Button>
          </Grid>
          <Grid item>
            <Button
              className="sub-button"
              ref={anchorRef}
              aria-controls={open ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
            >
              <ArrowRightIcon fontSize="small" />
            </Button>
          </Grid>
        </Grid>

        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    {status.map((el) => (
                      <MenuItem key={el} onClick={handleClose}>
                        {el}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </S.StatusButton>
  )
}

export default React.memo(StatusButton)
