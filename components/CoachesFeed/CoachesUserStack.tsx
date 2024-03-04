'use client';

import React, { useState } from 'react';
import { Select, Table, TagsInput } from '@mantine/core';
import CoachProfileCard from '@/components/CoachesFeed/CoachProfileCard';
import fakePeople from '@/data/mock-data/fakePeople';

export function CoachesUserStack() {
  const [sortBy, setSortBy] = useState('default');
  const [tagsShown, setTagsShow] = useState<string[]>([]);
  const filterTabs = [
    'Junior',
    'Consulting',
    'LGBTQ',
    'Latinx',
    'Business',
    'Available Weekly',
    'Available Today',
    'New York',
  ];

  //Add or remove tag from list of tags to filter by
  const toggleTag = (tags: string[]) => {
    setTagsShow(tags);
  };

  const filteredCoaches =
    tagsShown.length === 0
      ? fakePeople
      : fakePeople.filter((person) =>
        tagsShown.every((tag) => person.tags.includes(tag))
      );

  const sortedPeople = [...filteredCoaches]; // Make a copy of the array to avoid mutating the original

  // Function to sort the people array based on different criteria
  const sortPeople = (sortByCriteria: string) => {
    if (sortByCriteria === 'default') {
      // Default sorting logic (if needed)

    } else if (sortByCriteria === 'name') {
      sortedPeople.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortByCriteria === 'age') {
      sortedPeople.sort((a, b) => a.rate - b.rate);
    }
  };

  // Call the sorting function when sortBy changes
  sortPeople(sortBy);

  const rows = sortedPeople.map((person) => (
    <CoachProfileCard key={person.id} person={person} />
  ));

  const options = [
    {
      label: 'Default Sort',
      value: 'default',
    },
    {
      label: 'Sort by Name',
      value: 'name',
    },
    {
      label: 'Sort by Age',
      value: 'age',
    },
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <TagsInput
          label="Press Enter to submit a tag"
          description="Add up to 3 tags"
          placeholder="Enter tag"
          maxTags={3}
          limit={5}
          data={filterTabs}
          onChange={toggleTag}
          style={{ width: 400 }}
        />
        <Select
          label="Filter"
          data={options}
          value={sortBy}
          onChange={(value) => setSortBy(value as string)}
          style={{ width: 200 }}
        />
      </div>
      <Table.ScrollContainer minWidth={800}>
        <Table verticalSpacing="md">
          {/*<Table.Thead>*/}
          {/*  <Table.Tr>*/}
          {/*    <Table.Th>Coach&apos;s Name</Table.Th>*/}
          {/*    <Table.Th>Rating</Table.Th>*/}
          {/*    <Table.Th>Location</Table.Th>*/}
          {/*  </Table.Tr>*/}
          {/*</Table.Thead>*/}
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </div>
  );
}

export default CoachesUserStack;
