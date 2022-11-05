<template>
  <Card class="w-full shadow-custom">
    <Tabs :tabs="tabs" :selected="selectedTab" @select="handleTabChange">
      <template #all-customers-1>
        <span>All <Badge status="new">10+</Badge></span>
      </template>
      <CardSection :title="tabs[selectedTab].content">
        <p v-if="selectedTab === 1">This is specific content of second tab</p>
        <p v-else>Tab {{ selectedTab }} selected</p>
      </CardSection>
    </Tabs>
  </Card>
</template>

<script setup>
import { ref } from "vue";
const selectedTab = ref(0);
const handleTabChange = (selectedTabIndex) => {
  selectedTab.value = selectedTabIndex;
};
const tabs = [
  {
    id: "all-customers-1",
    content: "All",
    accessibilityLabel: "All customers",
    panelID: "all-customers-content-1",
  },
  {
    id: "accepts-marketing-1",
    content: "Accepts marketing",
    panelID: "accepts-marketing-content-1",
  },
  {
    id: "repeat-customers-1",
    content: "Repeat customers",
    panelID: "repeat-customers-content-1",
  },
];
</script>
