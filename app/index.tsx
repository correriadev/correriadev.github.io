import React from 'react';
import { Image, Linking, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import CenteredSection from './CenteredSection';
import SectionTitle from './SectionTitle';
import { BREAKPOINTS, CARD_GAP, SECTION_SPACING } from './designSystem';

const experience = [
  { 
    title: 'Paraná Banco',
    desc: 'Backend Engineer & Technical Lead (2022 - Present)',
    tags: 'Lead backend development for mobile banking app using .NET 8 and React Native'
  },
  { 
    title: 'Toro Investimentos',
    desc: 'Backend Developer (2021 - 2022)',
    tags: 'Developed backend services and Flutter mobile components'
  },
  { 
    title: 'Paraná Banco',
    desc: 'Backend Developer (2019 - 2021)',
    tags: 'Migrated legacy systems to Azure Cloud microservices'
  },
  { 
    title: 'DB1 Global Software',
    desc: 'Full-Stack Developer (2018 - 2019)',
    tags: 'Contributed to large-scale education sector project with microservices'
  },
  { 
    title: 'UDS Tecnologia',
    desc: 'Full-Stack Developer (2017 - 2018)',
    tags: 'Developed and maintained an internal e-commerce platform integrated with Moip and Mundipagg payment gateways.'
  },
  { 
    title: 'TecnoSpeed',
    desc: 'Full-Stack Developer (2015 - 2017)',
    tags: 'Provided technical consultancy for component integration in legacy Delphi and C# systems'
  },
];

const CONTACT_LINKS = [
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/artur-de-souza-corr%C3%AAa-b42028158/',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/correriadev',
  },
];

export default function Index() {
  const { width: screenWidth } = useWindowDimensions();
  const isMediumOrAbove = screenWidth >= BREAKPOINTS.md;

  // Responsive grid columns
  const getColumnCount = (width: number): number => {
    if (width >= BREAKPOINTS.xl) return 4;
    if (width >= BREAKPOINTS.lg) return 3;
    if (width >= BREAKPOINTS.md) return 2;
    return 1;
  };
  const columnCount = getColumnCount(screenWidth);

  // Split experience into rows for a true grid
  const getGridRows = (items: any[], columns: number) => {
    const rows = [];
    for (let i = 0; i < items.length; i += columns) {
      rows.push(items.slice(i, i + columns));
    }
    return rows;
  };
  const expRows = getGridRows(experience, columnCount);

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: SECTION_SPACING }}>
      {/* Profile Section */}
      <CenteredSection style={{ marginTop: SECTION_SPACING }}>
        <View
          style={[
            isMediumOrAbove ? styles.profileSectionMedium : styles.profileSectionSmall,
            { alignItems: 'center', width: '100%' }
          ]}
        >
          <Image source={{ uri: 'https://avatars.githubusercontent.com/u/155488593?v=4' }} style={isMediumOrAbove ? styles.profileImg : styles.profileImgMobile} />
          <View style={[styles.profileContent, isMediumOrAbove && styles.profileContentMedium]}>
            <Text style={styles.name}>Artur de Souza Corrêa</Text>
            <Text style={styles.role}>Software Engineer</Text>
            <Text style={styles.profileDesc}>
              Seasoned Software Engineer with over 5 years of experience developing .NET/C# applications. 
              Proficient in full-stack and backend development, with expertise in cloud platforms, 
              microservices architecture, and software engineering best practices.{"\n"}
              Committed to delivering high-quality solutions through clear stakeholder communication 
              and technical leadership.
            </Text>
          </View>
        </View>
      </CenteredSection>

      {/* Experience Section */}
      <CenteredSection style={{ marginTop: SECTION_SPACING, paddingHorizontal: 24 }}>
        <SectionTitle>Professional Experience</SectionTitle>
        <View style={{ width: '100%' }}>
          {expRows.map((row, rowIdx) => (
            <View
              key={rowIdx}
              style={{
                flexDirection: 'row',
                justifyContent: isMediumOrAbove ? 'flex-start' : 'center',
                marginBottom: CARD_GAP,
                gap: CARD_GAP,
              }}
            >
              {row.map((proj, colIdx) => (
                <View
                  key={proj.title}
                  style={[
                    styles.projectCard,
                    {
                      flex: 1,
                      maxWidth: `${100 / columnCount}%`,
                      marginRight: colIdx !== row.length - 1 ? CARD_GAP : 0,
                    },
                  ]}
                >
                  <View style={{ padding: 12 }}>
                    <Text style={styles.projectTitle}>{proj.title}</Text>
                    <Text style={styles.projectDesc}>{proj.desc}</Text>
                    <Text style={styles.projectTags}>{proj.tags}</Text>
                  </View>
                </View>
              ))}
            </View>
          ))}
        </View>
      </CenteredSection>

      {/* Contact Section */}
      <CenteredSection style={{ marginTop: SECTION_SPACING, paddingHorizontal: 24 }}>
        <SectionTitle>Contact</SectionTitle>
        <View style={styles.contactWrap}>
          <View style={styles.contactCard}><Text style={styles.contactText}>Curitiba, Paraná, Brazil</Text></View>
          {CONTACT_LINKS.map(link => (
            <Pressable
              key={link.label}
              style={styles.contactCard}
              onPress={() => Linking.openURL(link.url)}
              android_ripple={{ color: '#444' }}
            >
              <Text style={[styles.contactText, { textDecorationLine: 'underline', color: '#4ea1f7' }]}>{link.label}</Text>
            </Pressable>
          ))}
        </View>
      </CenteredSection>

      {/* Education Section */}
      <CenteredSection style={{ marginTop: SECTION_SPACING, marginBottom: SECTION_SPACING, paddingHorizontal: 24 }}>
        <SectionTitle>Education</SectionTitle>
        <View style={styles.contactWrap}>
          <View style={styles.contactCard}>
            <Text style={styles.contactText}>Bachelor of Software Engineering</Text>
            <Text style={[styles.contactText, { fontSize: 12, color: '#888' }]}>Unicesumar, 2015 - 2019</Text>
          </View>
          <View style={styles.contactCard}>
            <Text style={styles.contactText}>Technician in Electromechanics</Text>
            <Text style={[styles.contactText, { fontSize: 12, color: '#888' }]}>SENAI, 2012 - 2014</Text>
          </View>
        </View>
      </CenteredSection>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
    paddingTop: 24,
    paddingHorizontal: 0,
  },
  header: {
    paddingLeft: 24,
    fontSize: 12,
    letterSpacing: 1,
    color: '#b0b0b0',
    marginBottom: 16,
  },
  profileSectionSmall: {
    flexDirection: 'column',
    paddingHorizontal: 24,
    gap: 16,
  },
  profileSectionMedium: {
    flexDirection: 'row',
    gap: 24,
    alignSelf: 'center',
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  profileContent: {
    flex: 1,
  },
  profileContentMedium: {
    flex: 1,
    paddingRight: 24,
  },
  profileImg: {
    width: 120,
    height: 120,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#222',
  },
  profileImgMobile: {
    width: 100,
    height: 100,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#222',
    alignSelf: 'center',
    marginBottom: 16,
  },
  name: {
    fontSize: 36,
    fontWeight: '700',
    marginBottom: 4,
    color: '#fff',
  },
  role: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#fff',
  },
  profileDesc: {
    color: '#b0b0b0',
    fontSize: 15,
    marginBottom: 8,
    lineHeight: 22,
  },
  projectCard: {
    backgroundColor: '#232323',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 0,
    padding: 0,
    justifyContent: 'flex-start',
  },
  projectImg: {
    height: 60,
    backgroundColor: '#1a1a1a',
    opacity: 0.7,
  },
  projectTitle: {
    fontWeight: '600',
    fontSize: 16,
    color: '#fff',
    marginBottom: 4,
  },
  projectDesc: {
    color: '#b0b0b0',
    fontSize: 14,
    marginBottom: 6,
  },
  projectTags: {
    color: '#888',
    fontSize: 13,
    lineHeight: 18,
  },
  contactWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 6,
  },
  contactCard: {
    backgroundColor: '#232323',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 18,
    marginBottom: 10,
    marginRight: 10,
  },
  contactText: {
    color: '#fff',
    fontSize: 15,
  },
});
