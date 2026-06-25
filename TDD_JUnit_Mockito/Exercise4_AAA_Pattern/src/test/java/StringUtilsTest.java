import org.junit.Before;
import org.junit.After;
import org.junit.Test;

import static org.junit.Assert.*;

public class StringUtilsTest {

    private StringUtils stringUtils;

    @Before
    public void setUp() {
        stringUtils = new StringUtils();
        System.out.println("Setup executed");
    }

    @After
    public void tearDown() {
        System.out.println("Teardown executed");
    }

    @Test
    public void testToUpper() {

        // Arrange
        String input = "hello";

        // Act
        String result = stringUtils.toUpper(input);

        // Assert
        assertEquals("HELLO", result);
    }
}