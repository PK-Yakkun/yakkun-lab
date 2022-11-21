import { Box } from "@/components/atoms/Box/Box";
import { ListItem } from "@/components/atoms/ListItem/ListItem";
import { Stack } from "@/components/atoms/Stack/Stack";
import { Typography } from "@/components/atoms/Typography/Typography";
import { List } from "@/components/molecules/List/List";
import { Head } from "@/components/organisms/Head/Head";

const DesignSystem = () => {
  return (
    <>
      <Head title="Design System" />
      <Typography variant="h1" mb={{ sm: 4, md: 10 }}>
        Design System
      </Typography>
      <Box py={5}>
        <Typography variant="h2">Typography</Typography>
        <List py={4} w="100%" overflow="scroll">
          <ListItem py={3}>
            <Typography variant="h3">title</Typography>
            <Typography variant="title" whiteSpace="nowrap">
              M+1p 900 Yakkun Love
            </Typography>
          </ListItem>
          <ListItem py={3}>
            <Typography variant="h3">h1</Typography>
            <Typography variant="h1" whiteSpace="nowrap">
              M+1p 700 Yakkun Love
            </Typography>
          </ListItem>
          <ListItem py={3}>
            <Typography variant="h3">h2</Typography>
            <Typography variant="h2" whiteSpace="nowrap">
              M+1p 700 Yakkun Love
            </Typography>
          </ListItem>
          <ListItem py={3}>
            <Typography variant="h3">h3</Typography>
            <Typography variant="h3" whiteSpace="nowrap">
              M+1p 700 Yakkun Love
            </Typography>
          </ListItem>
          <ListItem py={3}>
            <Typography variant="h3">body</Typography>
            <Typography variant="body" whiteSpace="nowrap">
              M+1p 400 Yakkun Love
            </Typography>
          </ListItem>
          <ListItem pb={2}>
            <Typography variant="h3">caption</Typography>
            <Typography variant="caption" whiteSpace="nowrap">
              M+1p 400 Yakkun Love
            </Typography>
          </ListItem>
        </List>
      </Box>
      <Box py={5}>
        <Typography variant="h2">Colors</Typography>
        <Stack py={4} gap="30px" overflow="scroll">
          <Box bgColor="body" w="50px" h="50px" border="1px solid #9a9fac" />
          <Box bgColor="primary" w="50px" h="50px" />
          <Box bgColor="secondary" w="50px" h="50px" />
          <Box bgColor="accent" w="50px" h="50px" />
          <Box bgColor="typography" w="50px" h="50px" />
        </Stack>
      </Box>
      <Box py={5}>
        <Typography variant="h2">Spacing</Typography>
        <Stack py={4} gap="30px" overflow="scroll">
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Typography variant="caption" color="accent">
              2px
            </Typography>
            <Box bgColor="accent" w="2px" h="2px" opacity="0.4" />
          </Stack>
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Typography variant="caption" color="accent">
              6px
            </Typography>
            <Box bgColor="accent" w="6px" h="6px" opacity="0.4" />
          </Stack>
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Typography variant="caption" color="accent">
              12px
            </Typography>
            <Box bgColor="accent" w="12px" h="12px" opacity="0.4" />
          </Stack>
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Typography variant="caption" color="accent">
              18px
            </Typography>
            <Box bgColor="accent" w="18px" h="18px" opacity="0.4" />
          </Stack>
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Typography variant="caption" color="accent">
              24px
            </Typography>
            <Box bgColor="accent" w="24px" h="24px" opacity="0.4" />
          </Stack>
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Typography variant="caption" color="accent">
              30px
            </Typography>
            <Box bgColor="accent" w="30px" h="30px" opacity="0.4" />
          </Stack>
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Typography variant="caption" color="accent">
              36px
            </Typography>
            <Box bgColor="accent" w="36px" h="36px" opacity="0.4" />
          </Stack>
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Typography variant="caption" color="accent">
              42px
            </Typography>
            <Box bgColor="accent" w="42px" h="42px" opacity="0.4" />
          </Stack>
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Typography variant="caption" color="accent">
              (n × 6)px ...
            </Typography>
            <Box bgColor="accent" w="82px" h="42px" opacity="0.4" />
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default DesignSystem;
