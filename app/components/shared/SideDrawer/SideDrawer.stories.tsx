import type { Meta, StoryFn } from '@storybook/react';
import { SideDrawer } from './SideDrawer';

export default {
  title: 'Shared/SideDrawer',
  component: SideDrawer,
} as Meta<typeof SideDrawer>;

const Template: StoryFn<typeof SideDrawer> = (args) => <SideDrawer {...args} />;

const children =
  'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь. Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца. Также все другие известные генераторы Lorem Ipsum используют один и тот же текст, который они просто повторяют, пока не достигнут нужный объём. Это делает предлагаемый здесь генератор единственным настоящим Lorem Ipsum генератором. Он использует словарь из более чем 200 латинских слов, а также набор моделей предложений. В результате сгенерированный Lorem Ipsum выглядит правдоподобно, не имеет повторяющихся абзацей или "невозможных" слов.Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь. Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца. Также все другие известные генераторы Lorem Ipsum используют один и тот же текст, который они просто повторяют, пока не достигнут нужный объём. Это делает предлагаемый здесь генератор единственным настоящим Lorem Ipsum генератором. Он использует словарь из более чем 200 латинских слов, а также набор моделей предложений. В результате сгенерированный Lorem Ipsum выглядит правдоподобно, не имеет повторяющихся абзацей или "невозможных" слов.';

const controls = (
  <footer
    style={{
      backgroundColor: 'var(--gray-90)',
      color: 'var(--gray-10)',
      padding:
        'var(--space-medium) var(--size-middle) var(--space-medium) var(--space-medium)',
    }}>
    Footer
  </footer>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Drawer Title',
  children: '123',
  visible: true,
  controls,
};

export const WithOverflowContent = Template.bind({});
WithOverflowContent.args = {
  title: 'Drawer Title',
  children,
  visible: true,
  controls,
};
