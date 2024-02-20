import { Skeleton } from '@mui/material';
import { alpha } from '@mui/material/styles';
import '@myapp/shared/utils/highlight';
import { Suspense, lazy } from 'react';
import { StyledEditor } from './styles';
import Toolbar, { formats } from './toolbar';
import { EditorProps } from './types';

const ReactQuill = lazy(() => import('react-quill'));

export default function Editor({
  id = 'minimal-quill',
  error,
  simple = false,
  helperText,
  sx,
  ...other
}: EditorProps) {
  const modules = {
    toolbar: {
      container: `#${id}`,
    },
    history: {
      delay: 500,
      maxStack: 100,
      userOnly: true,
    },
    syntax: true,
    clipboard: {
      matchVisual: false,
    },
  };

  return (
    <>
      <StyledEditor
        sx={{
          ...(error && {
            border: (theme) => `solid 1px ${theme.palette.error.main}`,
            '& .ql-editor': {
              bgcolor: (theme) => alpha(theme.palette.error.main, 0.08),
            },
          }),
          ...sx,
        }}
      >
        <Toolbar id={id} isSimple={simple} />

        <Suspense
          fallback={
            <Skeleton
              sx={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                height: 1,
                position: 'absolute',
                borderRadius: 1,
              }}
            />
          }
        >
          <ReactQuill
            modules={modules}
            formats={formats}
            placeholder="Write something awesome..."
            {...other}
          />
        </Suspense>
      </StyledEditor>

      {helperText && helperText}
    </>
  );
}
